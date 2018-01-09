package com.collegefest.parser;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.collegefest.utils.Utils;

public class ParamParser {

	public static JSONObject extractJsonObject(HttpServletRequest req) throws JSONException {


		String applicationPath = req.getServletContext().getRealPath(""); //NO I18N

		String uploadFilePath = applicationPath + File.separator + "pic/";
		String filePath = "";


		Map< String, String> eventList = new HashMap<>();
		Map< String, String> contactList = new HashMap<>();
		String key = null;

		File fileSaveDir = new File(uploadFilePath);
		if (!fileSaveDir.exists()) {
			fileSaveDir.mkdirs();
		}

		try {
			ServletFileUpload fileUpload =  new ServletFileUpload(new DiskFileItemFactory());

			List<FileItem> items =fileUpload.parseRequest(req);
			for (FileItem item : items) {
				if (!item.isFormField()) {
					String fieldName = item.getFieldName();
					String fileName = item.getName();
					filePath = uploadFilePath + File.separator + fileName;
					if(!fileName.equals("")){
					item.write(new File(filePath));
					}
					//					FileWriter writer = new FileWriter(filePath);
					//					String content = item.getString();
					//					writer.append(content);
					//					writer.flush();
					//					writer.close();
				}else{
					key = item.getFieldName();

					if(key.startsWith("eventId")){
						eventList.put(key.split("_")[0], "");
					}

					if(key.startsWith("contactId")){
						contactList.put(key.split("_")[0], "");
					}

					req.setAttribute(item.getFieldName(),item.getString());

				}
			}
		} catch (FileUploadException e) {
			e.printStackTrace();
		}  catch (IOException e) {
			e.printStackTrace();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		if(eventList.toString().length() > 2){
			req.setAttribute("eventListId", eventList.toString().substring(1, eventList.toString().length()-2));
		}
		if(contactList.toString().length() > 2){
			req.setAttribute("contactListId", contactList.toString().substring(1, contactList.toString().length()-2));
		}
		JSONObject festMainJson =  new JSONObject();

		festMainJson.put("festId", Utils.random());
		festMainJson.put("userId", req.getAttribute("userId"));
		System.out.println(req.getAttribute("userId"));
		festMainJson.put("festName", req.getAttribute("festName"));
		festMainJson.put("festCaption", req.getAttribute("festCaption"));
		festMainJson.put("festDescription", req.getAttribute("festDescription"));

		festMainJson.put("festStartDate", req.getAttribute("festStartDate"));
		festMainJson.put("festEndDate", req.getAttribute("festEndDate"));

		festMainJson.put("festCollegeName", req.getAttribute("FestCollegeName"));
		festMainJson.put("festState", req.getAttribute("festState"));
		festMainJson.put("festCity", req.getAttribute("festCity"));

		JSONArray festType = new JSONArray();
		if(req.getAttribute("selectedFestType") != null && !req.getAttribute("selectedFestType").equals("")) {
			String str = (String) req.getAttribute("selectedFestType");
			str = str.substring(1);
			for(String t : str.split(":")){
				festType.put(t);
			}
			
		}
		festMainJson.put("festType", festType);
		
		System.out.println("fiiadfjoiasfjfgfpoijn");
		
		JSONArray festDept = new JSONArray();
		if(req.getAttribute("selectedDepType") != null && !req.getAttribute("selectedDepType").equals("")) {
			String str = (String) req.getAttribute("selectedDepType");
			str = str.substring(1);
			for(String t : str.split(":")){
				festDept.put(t);
			}
			
		}
		festMainJson.put("festDept", festDept);

		festMainJson.put("festLogoFile", "http://college-fest-db.eu5.org/pics/" + festMainJson.get("festId") + ".jpg");
		festMainJson.put("festLogoFilePath", filePath);

		JSONObject usrJson = new JSONObject();
		usrJson.put("organizerName", req.getAttribute("usrName"));
		usrJson.put("organizerMailID", req.getAttribute("usrMailId"));
		usrJson.put("organizerMobile", req.getAttribute("usrMobNum"));

		JSONObject aboutFest = new JSONObject();
		aboutFest.put("festTheme", req.getAttribute("festTheme"));
		aboutFest.put("festDescription", req.getAttribute("festDescription"));
		aboutFest.put("festGuest", req.getAttribute("festGuest"));
		aboutFest.put("festSponsers", req.getAttribute("festSponsers"));

		JSONArray eventDetails = new JSONArray();

		String [] eventIds = req.getAttribute("eventListId").toString().split("=, ");

		Arrays.stream(eventIds).forEach(id->{
			JSONObject event = new JSONObject();
			try {
				event.put("name", req.getAttribute(id + "_name"));
				event.put("type", req.getAttribute(id + "_type"));
				event.put("description", req.getAttribute(id + "_description"));
				eventDetails.put(event);
			} catch (Exception e) {
				e.printStackTrace();
			}
		});

		JSONObject otherEventsDetails = new JSONObject();
		otherEventsDetails.put("workshopDetails", req.getAttribute("workshopDetails"));
		otherEventsDetails.put("paperpersentationDetails", req.getAttribute("paperpersentationDetails"));
		otherEventsDetails.put("projectpresentationDetails", req.getAttribute("projectpresentationDetails"));

		JSONObject registrationDetails = new JSONObject();
		registrationDetails.put("registrationDeadLine", req.getAttribute("registrationDeadLine"));
		registrationDetails.put("registrationFees", req.getAttribute("registrationFees"));
		registrationDetails.put("registrationLink", req.getAttribute("registrationLink"));

		JSONObject contactDetails = new JSONObject();

		JSONArray contactPersons = new JSONArray();

		String [] contactIds = req.getAttribute("contactListId").toString().split("=, ");

		Arrays.stream(contactIds).forEach(id->{
			JSONObject contact = new JSONObject();
			try {

				contact.put("name", req.getAttribute(id + "_name"));
				contact.put("role", req.getAttribute(id + "_role"));
				contact.put("mailId", req.getAttribute(id + "_mailId"));
				contact.put("mobile", req.getAttribute(id + "_mobile"));

				contactPersons.put(contact);

			} catch (Exception e) {
				e.printStackTrace();
			}
		});

		contactDetails.put("accomodationDetails", req.getAttribute("accomodationDetails"));
		contactDetails.put("sponseshipContacts", req.getAttribute("sponseshipContacts"));
		contactDetails.put("stallContacts", req.getAttribute("stallContacts"));
		contactDetails.put("contactPersons", contactPersons);

		JSONObject eventAdderssDetails = new JSONObject();
		eventAdderssDetails.put("eventAddress", req.getAttribute("eventAddress"));
		eventAdderssDetails.put("transportDetails", req.getAttribute("transportDetails"));
		eventAdderssDetails.put("mapLink", req.getAttribute("mapLink"));

		JSONObject eventLinks = new JSONObject();
		eventLinks.put("eventWebsite", req.getAttribute("eventWebsite"));
		eventLinks.put("gplusLink", req.getAttribute("gplusLink"));
		eventLinks.put("fbLink", req.getAttribute("fbLink"));
		eventLinks.put("twitterLink", req.getAttribute("twitterLink"));
		eventLinks.put("youtubeLink", req.getAttribute("youtubeLink"));
		eventLinks.put("posterLink", req.getAttribute("posterLink"));
		eventLinks.put("appLink", req.getAttribute("appLink"));
		eventLinks.put("brochureLink", req.getAttribute("brochureLink"));
		eventLinks.put("collegeWebsite", req.getAttribute("collegeWebsite"));

		festMainJson.put("aboutFest", aboutFest);
		festMainJson.put("eventDetails", eventDetails);
		festMainJson.put("otherEventsDetails", otherEventsDetails);

		festMainJson.put("contactDetails", contactPersons);

		festMainJson.put("eventAdderssDetails", eventAdderssDetails);
		festMainJson.put("eventLinks", eventLinks);

		festMainJson.put("organizerDeatils", usrJson);
		festMainJson.put("registrationDetails",registrationDetails);


		System.out.println(festMainJson.toString());

		return festMainJson;

	}
}

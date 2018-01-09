package com.collegefest.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.json.JSONObject;

import com.collegefest.handler.DBHandler;
import com.collegefest.parser.ParamParser;
import com.collegefest.utils.Utils;


public class EventDataAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public EventDataAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			JSONObject rawJson = ParamParser.extractJsonObject(request);
			
			StringBuilder query = new StringBuilder();
			query.append("insert into FestDetails values(");
			query.append("'" + rawJson.get("userId") + "',");
			query.append("'" + rawJson.get("festId") + "',");
			query.append("true,");
			query.append("'" + rawJson.get("festName") + "',");
			query.append("'" + rawJson.get("festCaption") + "',");
			query.append("'" + rawJson.get("festLogoFile") + "',");
			query.append("'" + rawJson.get("festStartDate") + "',");
			query.append("'" + rawJson.get("festEndDate") + "',");
			query.append("'" + rawJson.get("festCollegeName") + "',");
			query.append("'" + rawJson.get("festState") + "',");
			query.append("'" + rawJson.get("festCity") + "',");
			query.append("'" + rawJson.get("festType") + "',");
			query.append("'" + rawJson.get("aboutFest") + "',");
			query.append("'" + rawJson.get("eventDetails") + "',");
			query.append("'" + rawJson.get("otherEventsDetails") + "',");
			query.append("'" + rawJson.get("registrationDetails") + "',");
			query.append("'" + rawJson.get("contactDetails") + "',");
			query.append("'" + rawJson.get("eventAdderssDetails") + "',");
			query.append("'" + rawJson.get("eventLinks") + "',");
			query.append("" + 0 + ",");
			query.append("" + 0 + ",");
			query.append("'" + rawJson.get("festDescription") + "',");
			query.append("'" + rawJson.get("festDept") + "');");
			
			
			
			System.out.println(query.toString());
			
			DBHandler.addRecord(query.toString());
			Utils.addEvent(rawJson.getString("festLogoFilePath"), "http://college-fest-db.eu5.org/upload.php", rawJson.get("festId") + ".jpg");
			
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}

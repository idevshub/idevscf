package com.collegefest.utils;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.security.SecureRandom;

import org.apache.http.HttpEntity;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.mime.HttpMultipartMode;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.entity.mime.content.InputStreamBody;
import org.apache.http.impl.client.BasicResponseHandler;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.json.JSONArray;
import org.json.JSONObject;

public class Utils {

	public final static String ADD_RECORD_URL = "http://college-fest-db.eu5.org/addEvent.php";

	public static String random(){
		String cur = String.valueOf(System.currentTimeMillis());
		return cur + new SecureRandom().nextInt(1000) ;
	}



	public static String POSTMethod(String path,String query){
		HttpURLConnection conn = null;

		try{
			URL url = new URL(path);
			conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("POST");//No I18N

			conn.setDoInput(true);
			conn.setDoOutput(true);

			conn.setUseCaches(false);
			conn.connect();

			conn.getOutputStream().write(("query=" + URLEncoder.encode(query, "UTF-8")).getBytes());
			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : "+ conn.getResponseCode());//No I18N
			}
			BufferedReader b = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));		

			StringBuilder builder = new StringBuilder();
			String line = null;

			while((line = b.readLine()) != null){
				builder.append(line);
			}

		}catch(Exception exception){
			exception.printStackTrace();
		}finally {
			conn.disconnect();
		}
		return null;
	}

	public static String addEvent(String logoFilePath , String url, String festId) throws Exception
	{
		System.out.println(logoFilePath + "::" + url);
		
		File file = new File(logoFilePath);
		CloseableHttpClient client = HttpClientBuilder.create().build();


		HttpPost post = new HttpPost(url);
		MultipartEntityBuilder meb = MultipartEntityBuilder.create();
		meb.setMode(HttpMultipartMode.BROWSER_COMPATIBLE);
		if(!file.isDirectory()){
		InputStreamBody fb = new InputStreamBody((InputStream)new FileInputStream(file),file.getName());
		
		meb.addPart("file",fb);
		}
		meb.addTextBody("festId", festId);
	
		HttpEntity he = meb.build(); 

		post.setEntity(he);
		ResponseHandler<String> responseHandler = new BasicResponseHandler();
		String httpRes = client.execute(post,responseHandler);
		System.out.println(httpRes.toString());
		return httpRes;

	}


}

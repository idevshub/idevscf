package com.collegefest.handler;

import org.json.JSONException;

import com.collegefest.utils.Utils;

public class DBHandler {

	public static boolean addRecord(String query) throws JSONException{
		
		Utils.POSTMethod(Utils.ADD_RECORD_URL, query);
		
		return false;
	}
}

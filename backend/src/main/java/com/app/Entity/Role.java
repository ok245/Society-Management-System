package com.app.Entity;

public enum Role {ROLE_ADMIN,ROLE_FLATOWNER,ROLE_WORKER;

	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return name().toLowerCase();
	}
}

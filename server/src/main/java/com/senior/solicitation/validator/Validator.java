package com.senior.solicitation.validator;

import java.util.ArrayList;
import java.util.List;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class Validator<T> {

	private T data;
	private List<String> errors;

	public void setData(T data) {
		this.data = data;
	}

	public T getData() {
		return data;
	}

	public void setErrors(List<String> errors) {
		this.errors = errors;
	}

	public List<String> getErrors() {
		
		if (this.errors == null) {
			this.errors = new ArrayList<>();
		}
		return errors;
	}

}

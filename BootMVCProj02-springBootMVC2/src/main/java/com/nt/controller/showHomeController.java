package com.nt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class showHomeController {

	/*
	 * @RequestMapping("/home") public String showHome() { return "welcome"; }
	 */
@RequestMapping("/")
public String showHome()
{
	return "welcome"; 
}

}

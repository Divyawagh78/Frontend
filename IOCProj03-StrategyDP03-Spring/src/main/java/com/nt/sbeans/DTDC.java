package com.nt.sbeans;

import org.springframework.stereotype.Component;

@Component("dtdc")
public class DTDC implements Courier{

	@Override
	public String deliver(int oid)
	{
		return oid+" items are kept for delivery by DTDC";
	}
}

package hff;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Servlet implementation class SetFeilds
 */
public class SetFeilds extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SetFeilds() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String s1=request.getParameter("book1");
		String s2=request.getParameter("book2");
		String s3=request.getParameter("book3");
		PrintWriter pw=response.getWriter();
		pw.println("<html><body bgcolor=cyan text=red><center>");
		pw.println("<h1>your books are added to the cart</h1>");
		pw.println("<form action=get>");
		pw.println("<input type=hidden name=book1 value="+s1+"<br/>");
		pw.println("<input type=hidden name=book1 value="+s2+"<br/>");
		pw.println("<input type=hidden name=book1 value="+s3+"<br/>");
	    pw.println("<input type=submit value=Next>&nbsp<input type=reset>");
	    pw.println("</form></center></body></html>");
	}

}

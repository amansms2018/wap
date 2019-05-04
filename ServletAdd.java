import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/ServletAdd")
public class ServletAdd extends HttpServlet {
    private String name;

    public ServletAdd() {
        super();
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        RequestDispatcher rd = request.getRequestDispatcher("/index.jsp");
        request.getRequestDispatcher("/index.jsp").forward(request, response);
        rd.forward(request, response);
        int  sum=0;
        int product=0;
        String a=  request.getParameter("t1");
        String b=  request.getParameter("t2");
        String c=  request.getParameter("t3");
        String d=  request.getParameter("t4");

        if (((a!=null)|| (a.length()!=0) || (b!=null)|| (b.length()!=0))){
            sum=  Integer.parseInt(a) + Integer.parseInt(b);
        }
        else if (((c!=null)|| (c.length()!=0) || (d!=null)|| (d.length()!=0))){
            product=   Integer.parseInt(c) + Integer.parseInt(d);
        }
        request.setAttribute("sum", sum);
        request.setAttribute("product", product);
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int sum = 0;
        int product = 0;

        String a = request.getParameter("t1");
        String b = request.getParameter("t2");
        String c = request.getParameter("t3");
        String d = request.getParameter("t4");

        if ((a == null || a == "") && (c == null || c == "")) {
            response.sendRedirect("/nn/index.jsp");
        } else {


            if (((a != "") || (a != null) || (b != null) || (b != ""))) {
                sum = Integer.parseInt(a) + Integer.parseInt(b);
            }
            if (((c != null) || (c != "") || (d != null) || (d != ""))) {
                product = Integer.parseInt(c) * Integer.parseInt(d);
            }

            response.setContentType("text/html");
            PrintWriter out = response.getWriter();
            out.println("<html><head><title>Add</title></head><body>");
            out.println("</body></html>");
            out.println("<form action=\"ServletAdd\"method=\"post\" border=\"2\" width=\"40%\">");
            out.println("<input type=\"text\"name=\"t1\" value=\"" + request.getParameter("t1") + "\"" + "size=\"6\"/>+");
            out.println("<input type=\"text\" name=\"t2\" value=\"" + request.getParameter("t2") + "\"" + "size=\"6\"/> =");
            out.println("<input type=\"text\" name=\"sum\" value=\"" + sum + "\"" + "size=\"6\"/>");
            out.println("<br>");
            out.println("<input type=\"text\" name=\"t3\" value=\"" + request.getParameter("t3") + "\"" + "size=\"6\"/> *");
            out.println("<input type=\"text\" name=\"t4\" value=\"" + request.getParameter("t4") + "\"" + "size=\"6\"/> =");
            out.println("<input type=\"text\" name=\"product\" value=\"" + product + "\"" + "size=\"6\"/>");
            out.println("<br> <br>");
            out.println("<input type=\"submit\" value=\"Submit\">");
            out.println("</form>");
            out.println("</body></html>");
        }
    }
}

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/quizServlet")
public class quizServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session=request.getSession();
        // String n=(String)session.getAttribute("scores");
        Quiz q = (Quiz)session.getAttribute("quiz");

        int currentQuestion =  (int)session.getAttribute("currentQuestion");
        int ans=  Integer.parseInt(request.getParameter("next").trim());
        int scores = Integer.parseInt(request.getParameter("scores")) + q.computeScore(currentQuestion, ans);
       ///
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        session.setAttribute("currentQuestion", (++currentQuestion));

        if (currentQuestion< Quiz.questions.length){
            out.println("<html><head><title>Add</title></head><body>");
            out.println("</body></html>");
            out.println("<form action='quizServlet' method='post' border='2' width='40%'>");
            out.println("<h1> The Number Quiz</h1>");
            out.println("<lable> Your Current score is</lable>");
            out.print("<input type= 'text' name='scores' value=" + scores +" size='6' readonly" + ">");
            out.println("<br><br>");
            out.println("<lable> Guess the next  Number in the Seqnense <br>");
            out.println(q.questions[currentQuestion] + "</lable> <br><br>");
            out.println("<input type='text' name='next'value=''size='6'>");
            out.println("<br> <br> <br>");
            out.println("<input type='submit'value='Submit'>");
            out.println("</form>");
            out.println("</body></html>");
        }
      else {
            out.println("<html><head><title>Add</title></head><body>");
            out.println("</body></html>");
            out.println("<lable> Your Current score is</lable>");
            out.print("<input type= 'text' name='scores' value=" + scores +" size='6' readonly" + ">");
            out.println("<lable> you have comleted the Number Quiz, with a scores of " );
            out.print(scores + " out of " + Quiz.questions.length +" </label>");
            out.println("<br><br>");
            out.println("</form>");
            out.println("</body></html>");
        }
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        int scores= 0;
        HttpSession session = request.getSession();
        session.setAttribute("quiz", new Quiz());
        session.setAttribute("currentQuestion", 0);
        PrintWriter out = response.getWriter();
        out.println("<body bgcolor ='#f0f0f0'>" +
                        "<h1 align ='left'> The Number Quiz </h1>\n" );
        out.println("<form action='quizServlet' method='post' width='40%' border-style='solid' border-color='red' align='left' bgcolor='#949494'>");

        out.println("<lable> Your Current score is</lable>");
        out.print(" <input type='text' name='scores' value='0' size='6' readonly>");
        out.println("<br><br>");
        out.println("<lable> Guess the next  Number in the Seqnense <br>");
        out.println(Quiz.questions[0] + "</lable> <br><br>");
        out.println("<lable> Your Answer please: <input type='text' name='next' value=''size='6'></lable>");
        out.println("<br> <br> <br>");
        out.println("<input type='submit'value='Submit'>");
        out.println("</form>");
        out.println("</body></html>");
    }



}

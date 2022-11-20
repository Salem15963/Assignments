<%@ page language="java" contentType="text/html; charset=windows-1256"
    pageEncoding="windows-1256"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="windows-1256">
<title>Home Page</title>
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" href="/css/index_style.css"/>
	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container">
	    <div>
	        <h3>Your Gold</h3>
			<c:choose>
			    <c:when test="${counter<'0'}">
				    <h4>You have lost, rest to play again</h4>
		        	<div><c:out value="${counter}"></c:out></div>
			        <br />
			    </c:when>    
			    <c:otherwise>
	        		<div><c:out value="${counter}"></c:out></div>
			        <br />
			    </c:otherwise>
			</c:choose>
	    </div>
	    <form action="/reset" method="post">
	        <button type="submit" name="reset" class="btn btn-primary">Reset</button>
	    </form>
	    <div>
	    <form action="/collect" method="post" class="items" name="items">
	        <div>
	            <h2>Farm</h2>
	            <p>(earn 10-20 gold)</p>
				<c:choose>
				    <c:when test="${counter >'-1'}">
						<input type="submit" name="find_gold" value="get gold" formaction="/collect/collect1" class="btn btn-warning">
					    <br />
				    </c:when>    
				</c:choose>
	        </div>
	        <div>
	            <h2>Cave</h2>
	            <p>(earn 5-10 gold)</p>
				<c:choose>
				    <c:when test="${counter >'-1'}">
				<input type="submit" name="find_gold" value="get gold" formaction="/collect/collect2" class="btn btn-warning">
					    <br />
				    </c:when>    
				</c:choose>
	        </div>
	        <div>
	            <h2>House</h2>
	            <p>(earn 2-5 gold)</p>
				<c:choose>
				    <c:when test="${counter >'-1'}">
				<input type="submit" name="find_gold" value="get gold" formaction="/collect/collect3" class="btn btn-warning">
					    <br />
				    </c:when>    
				</c:choose>
	        </div>
	        <div>
	            <h2>Quest</h2>
	            <p>(earn/takes 0-50 gold)</p>
				<c:choose>
				    <c:when test="${counter >'-1'}">
				<input type="submit" name="find_gold" value="get gold" formaction="/collect/collect4" class="btn btn-warning">
					    <br />
				    </c:when>    
				</c:choose>
	        </div>
	        <div>
	            <h2>Spa</h2>
	            <p>(takes 5-20 gold)</p>
				<c:choose>
				    <c:when test="${counter >'-1'}">
				<input type="submit" name="find_gold" value="get gold" formaction="/collect/collect5" class="btn btn-warning">
					    <br />
				    </c:when>    
				</c:choose>
	        </div>
	    </form>
	    </div>
		<div>
		    <h2>Activities:</h2>
		    <div class="all_logs">
		    	<c:forEach items="${activity}" var="log">
		    	<p class="activity_log"><c:out value="${log}"></c:out></p>
				</c:forEach>
		    </div>
		</div>
	</div>
</body>
</html>
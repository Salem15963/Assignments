<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
		<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
		    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
	<%@ page isErrorPage="true" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Home Page</title>
<link rel="stylesheet" type="text/css" href="/css/style.css">
<script type="text/javascript" src="js/app.js"></script>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/main.css"/>
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
<a href="/ninja">add a ninja</a>
        <div class="col-10 justify-content-center">
            <div class="row">
                <h1 class="col">New Dojo:</h1>
            </div>
<br>
	<form:form action="/addDojo" method="post" modelAttribute="dojo">
    <p>
        <form:label  path="name">Name</form:label>
        <form:errors path="name"/>
        <form:input type="text" path="name"/>
    </p>
     
    	<input type="submit" value="Create"/>
	</form:form> 
      </div>
</div>
<div>
		    
	<h4>
		<c:forEach var="dojo" items="${dojos}">
		   <a href="/show/${dojo.id}"/><c:out value='${dojo.name}'/></a>
		</c:forEach>
	</h4>

</div>
</body>
</html>
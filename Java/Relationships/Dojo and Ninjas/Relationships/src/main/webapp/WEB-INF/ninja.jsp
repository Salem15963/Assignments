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
<a href="/dojo">add a dojo</a>
        <div class="col-10 justify-content-center">
            <div class="row">
                <h1 class="col">New Ninja:</h1>
            </div>
<br>
	<form:form action="/addNinja" method="post" modelAttribute="ninja">
	

	<div class="dropdown">
	<label>Dojo</label>
		<form:select path="dojo" id="dropdown">
		    <c:forEach var="dojo" items="${dojos}">
		        <option value="${dojo.id}"/><c:out value='${dojo.name}'/></option>
		    </c:forEach>
		    
		</form:select>
	</div>
	<br>
    <p>
        <form:label  path="firstName">First Name</form:label>
        <form:errors path="firstName"/>
        <form:input type="text" path="firstName"/>
    </p>
    <p>
        <form:label  path="lastName">Last Name</form:label>
        <form:errors path="lastName"/>
        <form:input type="text" path="lastName"/>
    </p>
    <p>
        <form:label  path="age">Age</form:label>
        <form:errors path="age"/>
        <form:input type="number" path="age"/>
    </p>
     
    	<input type="submit" value="Create"/>
	</form:form> 
      </div>
</div>
</body>
</html>
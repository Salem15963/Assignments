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

<h1>Here's Your Omikuji!</h1>
<p>in 10 years you will live in <c:out value="${city}"/> with <c:out value="${person}"/> as your roommate,<p> <p> <c:out value="${hobby}"/> for a living.
the next time you will see a <c:out value="${living}"/>, you will have a good luck. Also, <c:out value="${text}"/> <p>
<br>
<a class="col-2" class="text-right btn btn-sm btn-outline-primary" href="/">Go Back</a> 


</html>
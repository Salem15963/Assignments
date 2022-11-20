<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
</head>

<body>
    <div class="container">
        <div class="col-10 justify-content-center">
            <div class="d-flex mt-5">
                <a class="col-2" class="text-right btn btn-sm btn-outline-primary" href="/languages">Dashboard</a> 
                <div>
				<form action="/languages/${language.id}/delete" method="post">
    				<input type="hidden" name="_method" value="delete">
    				<input type="submit" value="Delete">
				</form>
                </div>  
            </div>
            <br>
                <h1 class="col">Edit Language:</h1>
<br>
<form:form action="/languages/${language.id}/update" method="post" modelAttribute="language">
    <input type="hidden" name="_method" value="put">

    <p>
        <form:label path="name">Name</form:label>
        <form:errors path="name"/>
        <form:input path="name" placeholder="${Language.name}"/>
    </p>

    <p>
        <form:label path="creator">Creator</form:label>
        <form:errors path="creator"/>
        <form:input path="creator" placeholder="${Language.creator}"/>
    </p>
    <p>
        <form:label path="version">Version</form:label>
        <form:errors path="version"/>     
        <form:input type="number" path="version" placeholder="${Language.version}"/>
 
    <input type="submit" value="Submit"/>
</form:form> 
        </div>
    </div>
</body>
</html>
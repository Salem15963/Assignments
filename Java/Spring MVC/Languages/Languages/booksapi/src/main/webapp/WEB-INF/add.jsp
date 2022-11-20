<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>

<body>
    <div class="container">
        <div class="col-10 justify-content-center">
            <div class="row">
                            <a class="col-2" class="text-right btn btn-sm btn-outline-primary" href="/languages">Dashboard</a>
            
                <h1 class="col">Add Language:</h1>
            </div>

<form:form action="/create" method="post" modelAttribute="language">
    <p>
        <form:label path="name">Name</form:label>
        <form:errors path="name"/>
        <form:input path="name"/>
    </p>

    <p>
        <form:label path="creator">Creator</form:label>
        <form:errors path="creator"/>
        <form:input path="creator"/>
    </p>
    <p>
        <form:label path="version">Version</form:label>
        <form:errors path="version"/>     
        <form:input type="number" path="version"/>
     
    <input type="submit" value="Submit"/>
</form:form> 
        </div>
    </div>
</body>
</html>
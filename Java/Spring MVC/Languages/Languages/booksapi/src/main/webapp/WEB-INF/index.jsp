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
  <h2>Save Languages</h2>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Creator</th>
        <th>Version</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
  <tbody>
     <c:forEach var="language" items="${languages}">
		<tr>
		 <td><c:out value="${language.id}"></c:out></td>
		 <td><a href="/languages/${language.id}">${language.name}</a></td>
	     <td><c:out value="${language.creator}"></c:out></td>
		 <td><c:out value="${language.version}"></c:out></td>
		 <td><a href="/languages/${language.id}/edit">edit</a></td>
			<td>
				<form action="/languages/${language.id}/delete" method="post">
    				<input type="hidden" name="_method" value="delete">
    				<input type="submit" value="Delete">
				</form>
			</td>
		</tr>
		</c:forEach>
    </tbody>
  </table>
  <br>
  <br>
<div class="container">
        <div class="col-10 justify-content-center">
            <div class="row">
                <h1 class="col">Add Language:</h1>
            </div>
<br>
	<form:form action="/languages" method="post" modelAttribute="language">
    <p>
        <form:label  path="name">Name</form:label>
        <form:errors path="name"/>
        <form:input type="text" path="name"/>
    </p>

    <p>
        <form:label path="creator">Creator</form:label>
        <form:errors path="creator"/>
        <form:input type="text" path="creator"/>
    </p>
    <p>
        <form:label path="version">Version</form:label>
        <form:errors path="version"/>     
        <form:input type="number" path="version"/>
     
    <input type="submit" value="Submit"/>
	</form:form> 
        </div>
    </div>
</div>
</html>
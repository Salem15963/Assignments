<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
		<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
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
  <h2>All Books</h2>
  <table class="table table-striped">
    <thead>

      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Description</th>
        <th>Language</th>
        <th>Number Of Pages</th>
      </tr>
    </thead>
    <tbody>
    		<c:forEach var="book" items="${books}">
			<tr>
				<td><c:out value="${book.id}"></c:out></td>
				<td><a href="/books/${book.id}"><c:out value="${book.title}"></c:out></a></td>
				<td><c:out value="${book.description}"></c:out></td>
				<td><c:out value="${book.language}"></c:out></td>
				<td><c:out value="${book.numberOfPages}"></c:out></td>
			</tr>	
		</c:forEach>
    </tbody>
  </table>
</div>
</html>
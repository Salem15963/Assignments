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
  <h2>Save Travels</h2>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Expense</th>
        <th>Vendor</th>
        <th>Amount</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    		<c:forEach var="expense" items="${expenses}">
			<tr>
				<td><c:out value="${expense.id}"></c:out></td>
				<td><a href="/expenses/show/${expense.id}">${expense.name}</a></td>
				<td><c:out value="${expense.vendor}"></c:out></td>
				<td><c:out value="${expense.amount}"></c:out></td>
				<td><a href="/expenses/${expense.id}/edit">edit</a></td>
				<td>
					<form action="/expenses/${expense.id}" method="post">
    					<input type="hidden" name="_method" value="delete">
    					<input type="submit" value="Delete">
					</form>
				</td>
			</tr>
		</c:forEach>
    </tbody>
  </table>
</div>
</html>
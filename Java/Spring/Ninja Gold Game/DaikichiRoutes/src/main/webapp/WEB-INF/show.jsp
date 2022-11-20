<%@ page language="java" contentType="text/html; charset=windows-1256"
    pageEncoding="windows-1256"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="windows-1256">
<title>Insert title here</title>
</head>
<body>
	<div>
	    <h2 class="log">You have lost:</h2>
    	<div class="activites"><c:out value="${counter}"></c:out></div>
	</div>
</body>
</html>
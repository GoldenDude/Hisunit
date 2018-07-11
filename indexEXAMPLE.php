<!DOCTYPE html>
<html>
	<head>
		<title>save and display data from DB without refresh</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
		<script src="includes/jquery.min.js"></script>
	</head>
	<body>
		<div class="container-fluid">	
			<form method="post" id="posts" action="">
				<h1>Posts</h1>
				<h5>+ ADD A NEW POST</h5>			
				<div class="form-group">
					<label for="title">* Insert title</label>
					<input type="text" class="form-control" id="ttl" name="ttl" placeholder="Enter title">
				</div>
				<div class="form-group">
					<label for="title">* Insert description</label>
					<textarea class="form-control" id="desc" name="desc" placeholder="Enter description"></textarea>
				</div>
				<button type="submit" class="btn btn-primary mb-2">Save the post</button>
				<div id="loader"></div>
			</form>
		</div>

		<script>
		$(function() {
			$("#posts").submit(function() {
				var desc = $("#desc").val();
				var ttl = $("#ttl").val();
				var dataString = 'desc=' + desc + '&ttl=' + ttl;//if desc is empty it will send empty string	

				//console.log(dataString);
				$("#loader").show();
				$("#loader").fadeIn(300).html('<span class="loading">Loading..</span>');

				$.ajax({
					type: "POST",
					url: "action.php",
					data: dataString,
					cache: true,
					success: function(html){
						$("#loader").after(html);
						$("#loader").hide();
					}  
				});
				return false;
			});
		});
		</script>
	</body>
</html>


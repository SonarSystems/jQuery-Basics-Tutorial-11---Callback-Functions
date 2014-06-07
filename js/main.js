$(document).ready(function()
{
	$("button").click(function()
	{
		/*
		$("div").hide(5000, function()
		{
			alert("The paragraph is now hidden");
		});
*/
		
		$("div").hide(5000, AlertFunction);
	});

	function AlertFunction()
	{
		alert("The paragraph is now hidden");
	}
});
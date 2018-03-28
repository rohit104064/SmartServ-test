function(x, y, f, direction)
{
	if(x>=6 || y>=6)
	{
		consol.log("not in place")
	}
	else
	{
		if(x>=0 && y>=0)
		{
			var xaxis = 0;
			xaxis += x;

			var yaxis = 0;
			yaxis +=y;

		}
	}


	if(f != null)
	{
		if(f == "N")
		{
			if(direction == 'left')
			{
				var resFacing = 'W'
			}
			else if(direction == "right")
			{
				var resFaceing = "E"
			}
		}
	}
	var report = `The x is ${xaxis} and the y is ${yaxis} and the face is ${resFacing}`;
	return report;
}
/* Same applies to all directions ;
 
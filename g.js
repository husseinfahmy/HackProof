function compare(params) 
{
    var fs = require('fs');
		var documentDistance = require('document-distance');
		int max = 0;

		for(int x = 0; x < params.length; x++)
		{
			for(int y = x+1; y < params.length; y++)
			{
				if(documentDistance(params[x], params[y]) > max)
				{
					max = documentDistance(params[x], params[y]);
				}
			}
		}
		return max;
}

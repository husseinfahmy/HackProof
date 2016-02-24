//updates mysql and returns array of strings (that represent code of ideas similar based on tag) 
//REMEMBER NAME IS CODE

function updatesql(tagsarray_string, code_string, description_string) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'admin',
		password : 'password',
		database : 'uofthacks'
	});

	connection.connect();


	var pid_;
	var tid_= new Array();


//for project table 
var projectrow={pid:null,name:code_string,description:description_string};
connection.query('INSERT INTO project SET ?', projectrow, function(err,res)
{
	if (err) {throw err;}
	pid_=res.insertId;
});



//for tag table
for(i=0;i<tagsarray_string.length;i++)
{
	var currenttag= tagsarray_string[i];
	var tagrow= {tid:null,name:currenttag};
	connection.query('INSERT INTO tag SET ?',tagrow,function(err,res)
	{
		if (err) {throw err;}
		tid_.push(res.insertId);
	});

}


//for project_tag table
for(i=0;i<tid_.length;i++)
{
	var currenttid=tid_[i];
	var allrow = {id:null,pid:pid_,tid:currenttid};
	connection.query('INSERT INTO project_tag SET ?',allrow,function(err,res)
	{
		if (err) {throw err;}
	});
}

}

module.exports = updatesql;
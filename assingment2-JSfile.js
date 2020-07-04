
	
	
	function displaynum(a)
    {        
      forms.display.value+=a ;
	   return "num";
	}
    function evalto(){
	    forms.display.value= eval(forms.display.value) ;
		return "calculate ans";
		}		
    function ac(){
	        forms.display.value="0";
			return "clear all";
			}
	function backspace(){
         var prevalue=forms.display.value;
           forms.display.value=prevalue.substr(0,prevalue.lenght-1);
		   return "delete one symboll";
}
     function sqrt(){
	      forms.display.value=Math.pow(forms.display.value,1/2);
		  return "squart root";
		  }
		  
		  
		  
		  
		  
		  
		  
		  
		   function validation(){
		              var user= document.getElementById('user').value;
					  var phone=document.getElementById('phone').value;
					   var email=document.getElementById('email').value;
					   
					   if(user==""){
					   document.getElementById('username').innerHTML=" **please fill username";
					   return false;
					   }	   
					   if(!isNaN(user)){   
					   document.getElementById('username').innerHTML=" **please fill character";
					   return false;
					   }
					   
					   
					   
					 if(phone==""){
					   document.getElementById('1').innerHTML="**please fill phone";
					   return false;
					   }
					  if(phone.lenght==10){
					  document.getElementById('1').innerHTML="**please fill valid number";
					   return false;
					  }
					   
		  
		  
		               if(email==""){
					   document.getElementById('2').innerHTML="**please fill email";
					   return false;
					   }
		               if(email.indexOf('@')<=0){
					    document.getElementById('2').innerHTML="**please fill correct email";
					   return false;
					   }
                       if((email.charAt(email.lenght-4)!='.'){//&&(email.charAt(email.lenght-3)!='.')){
                            document.getElementById('2').innerHTML="**please fill correct email";
					   return false;
					   }				   
   
                       return "validation for name mobile no. ,email";
		       }
			   
			 
			   
			   
			   
			   
			   function palindrome(){
     
	   inpString= document.getElementById("text").value;
	      revString ="";
	      i=inpString.length;
	   for(var j=i;j>=0;j--)
	   { 
	     revString=revString+inpString.charAt(j);
		// document.write(revString+"<br>");
		  }
		 
          if(revString==inpString){
		   alert("palindrome")
            return true;
         }
        else{
		         alert("not palindrome")		   
             return false;
               
           }	
          return "string is palindrome or not"	;	   
   }
			   
			   
			   
			   
			   
			   function anagram(){
          str=document.getElementById("1").value;
		  str=str.toLowerCase().split('').sort().join('').trim();
          str1=document.getElementById("2").value;
		   str1=str1.toLowerCase().split('').sort().join('').trim();
     		if(str==str1)
			{   alert(" it is anagram");
			   return true;
			   }
			else{
			    alert("not a anagram");
				return false;
				}
		return "validation of string for anagram"		
}
			   
			   
			   
			   
			   
			   
			   
			   
			   
			   
			   
			   
			   
			   
			   
			   
			   
			   
			   
			   
			   
			   
		  
		  
		  
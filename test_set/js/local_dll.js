
		function oo()  {
    // 선택된 목록 가져오기
    const query = '.input_font:checked';
    const selectedEls = 
        document.querySelectorAll(query);
    
    // 선택된 목록에서 value 찾기
    let result = '';
    
    selectedEls.forEach((el) => {
      result += el.value + '/ ';
   
    });
    // 출력
			var cast =result; 

			localStorage.setItem("cast", JSON.stringify(cast));
}
			
            $(function(){
		$(".input_font").on("click",oo);
            })
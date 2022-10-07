
      $("#inputCep").focusout(function(){
        var cep = $("#inputCep").val();
        cep = cep.replace("-", "");
        var urlStr = "https://viacep.com.br/ws/"+ cep +"/json/";
        $.ajax({
          url : urlStr,
          type : "get",
          dataType : "json",
          success : function(data){
            console.log(data);

            $("#inputCity").val(data.localidade);
            $("#inputState").val(data.uf);
            $("#inputAddress2").val(data.bairro);
            $("#inputAddress").val(data.logradouro);
            // $("#inputCity").val(data.complemento);
          },
          error : function(erro){
            console.log(erro);
          }
        });
       });
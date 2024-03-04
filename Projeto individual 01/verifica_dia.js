function verificaDiaSemana (){
    var data_atual = new Date();
    var dia_da_semana = data_atual.getDay();
    if (dia_da_semana === 4){
        return true
} else{
    return false
}
};
module.exports = verificaDiaSemana;
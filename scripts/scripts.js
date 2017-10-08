module.exports = function(robocop){
    robocop.hear(/speak!  /, function(res){
        return res.send(" Carlyse Jordan of the House Targaryen, First of Her Name, the Unburnt, Queen of the Andals and the First Men, Khaleesi of the Great Grass Sea, Breaker of Chains, and Mother of Dragons."
            ")

    });
}
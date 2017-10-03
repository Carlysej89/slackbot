module.exports = function(robocop){
    robocop.hear(/welcome!/, function(res){
        return res.send("Welcome and happy first birthday Zoe")
    });
}
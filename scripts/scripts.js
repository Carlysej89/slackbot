module.exports = function(robocop){
    robocop.hear(/Hey Girl!/, function(res){
        return res.send("Wassup!")
    });
}
var link = "https://sundog-game-grantmoe.c9users.io/Project/assets/spritesheet/completesprites.json";
$.getJSON( link, function (data) {
    var content;
    var list;
    showData.append(list);
    $.each(data["frames"], function(key,val){
        console.log(data["frames"][key]["filename"]);
        content = '<li>' + data["frames"][key]["filename"] + '</li>';
        showData.append(content);
    });
});


console.log("reading JSON");
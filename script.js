$(document).ready(function () {
    // let list = document.getElementsByClassName("list");
    let r, g, b, LeftBlock, firstindex, secindex, lastindex;

    $("#btn").on("click", function () {
        let inputVal = $("#InputVal").val();
        secindex = 1;
        for (let index = 1; index <= inputVal; index++) {
            r = Math.floor(Math.random(255) * 255);
            g = Math.floor(Math.random(255) * 255);
            b = Math.floor(Math.random(255) * 255);
            // element = list[index];
            LeftBlock = `<div class="list">${index}</div> `;
            $("#left").append($(LeftBlock).css({ background: `rgb(${r},${g},${b})` }))
            secindex = 1;
            $(".list").each(function () {
                $(this).text(secindex++);
            })
            // $(element).css({ background: `rgb(${r},${g},${b})` });
        }
    })
        $("#left").on("click", ".list", function () {
            $(this).hide(function () {
                console.log("left");
                $("#right").append($(this).show());
                secindex = 1;
                $("#right .list").each(function () {
                    $(this).text(secindex++);
                })
                firstindex = 1;
                $("#left .list").each(function () {
                    $(this).text(firstindex++);
                })
            })
        });


        $("#right").on("click", ".list", function () {
            $(this).hide(function () {
                console.log("right");
                $("#left").append($(this).show());
                firstindex = 1;
                $("#left .list").each(function () {
                    $(this).text(firstindex++);
                })
                lastindex = 1;
                $("#right .list").each(function () {
                    $(this).text(lastindex++);
                })

            })
        });
    
});

var data = [
    {
        "id" : "1",
        "text" : 'Root',
        "parent" : "#",
        'state' : {
            'opened' : true,
            'selected' : true
        }
    },
    {
        "id" : "2",
        "parent" : "1",
        'text' : 'Node 2',
        "icon": "Root",
        'state' : {
            'opened' : true,
            'selected' : false
        }
    },
    {
        "id" : "3",
        "parent" : "1",
        'text' : 'Node 3',
        "icon": "Root",
        'state' : {
            'opened' : true,
            'selected' : false
        }
    }
];

$(function () {
    $.jstree.defaults.core.themes.variant = "large";
    $('#oc-tree').jstree({
       "plugins" : [ "wholerow" ],
       'core' : {
            "data": data
       }
    });
    // 7 bind to events triggered on the tree
    $('#oc-tree').on("changed.jstree", function (e, data) {
      console.log(data.selected);
      changeContent(data);
    });
})

function getContentById (id) {
    console.log("getContentById: " + id);
    if (content[id] === undefined) {
        return "undefined content";
    }
    return content[id].content;
}

function changeContent(data) {
    console.log("function changeContent " + data.selected);
    document.getElementById("oc-editor").innerHTML = getContentById( data.selected);
}

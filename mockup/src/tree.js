var data =
    [
         'root',

       {
         'text' : 'Root node 2',
         "icon": "root",
         'state' : {
           'opened' : true,
           'selected' : true
         },
         'children' : [
           { 'text' : 'child_node_1' },
           'Child 2',
           {
            "text" : "Child 3",
            'children' : [
                'childchild 3-1'
            ]
           }
         ]
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
    });
    // 8 interact with the tree - either way is OK
    $('button').on('click', function () {
      $('#oc-tree').jstree(true).select_node('child_node_1');
      $('#oc-tree').jstree('select_node', 'child_node_1');
      $.jstree.reference('#oc-tree').select_node('child_node_1');
    });
  });
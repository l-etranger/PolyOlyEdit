require(['polygons/model', 'polygons/view', 'polygons/controller', 'polygons/Vertex'], function(model, view, controller, Vertex){

    model.add(new Vertex({
        x: 50,
        y: 50
    }));

});

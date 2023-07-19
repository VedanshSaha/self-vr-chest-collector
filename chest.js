AFRAME.registerComponent("create-chest", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        //id
        var id = `chest${i}`;
  
        //position variables
        var posX = Math.random()*100+30;
        var posY = 0;
        var posZ =  Math.random()*100-30;
        
  
        var position = { x: posX, y: posY, z: posZ };

        print(position);
  
        //call the function
        this.createchests(id, position);
      }
    },
  
    createchests: function (id, position) {
      var terrainEl = document.querySelector("#terrain");
      var chestEl = document.createElement("a-entity");
  
      chestEl.setAttribute("id", id);
      chestEl.setAttribute("scale",{
        X:0.05,
        y:0.05,
        z:0.05
      });
      chestEl.setAttribute("position", position);
      chestEl.setAttribute("gltf-model","./assets/chest/scene.gltf");
  
      terrainEl.appendChild(chestEl);
    },
  });
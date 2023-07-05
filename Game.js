AFRAME.registerComponent("game-play",{
    schema:{
        eId:{type:"string",default:"#coin1"}
    },
    //manal did not call the custom function in update
    update: function() {
        // this.data.eId
        this.IsCollide(this.data.eId);
      },
    IsCollide:function(new_eId){
        const element=document.querySelector(new_eId)
        element.addEventListener("collide",(e) => {
            if(new_eId.includes("#coin")){
                console.log( "Coin collision")
            }
            else if(new_eId.includes("#fish")){
                console.log("fish has been collided")
            }


        })
    }
})
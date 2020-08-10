class Game {
    
    constructor(){
  
    }
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         GameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        GameState: state
      });
    }
 
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('PlayerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      p1 = createSprite(100,200);
      p1.addImage("modi.jpg",modi_img);
      p2 = createSprite(300,200);
      p2.addImage("amit.png",amit_img);
      p3 = createSprite(500,200);
      p3.addImage("rahul.png",rahul_img);
      p4 = createSprite(700,200);
      p4.addImage("sonia.png",sonia_img);
      politicians=[p1,p2,p3,p4];
    }
  
    play(){
      if(gameState===START){
        this.input.display();
        this.button.display();
        
      }
      if(mousePressedOver(this.button)){
      gameState=PLAY1;
      }
      if(players.exists){
      gameState=PLAY2;
      
      }
      if(gameState===PLAY1){
        this.greeting();
      }
      if(gameState===PLAY2){
      
      lines();
      
      //o1
      if(mousePressedOver(o1)){
      
      o2.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      if(mousePressedOver(o2)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o3)){
      
      o1.destroy();
      o2.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o4)){
      
      o1.destroy();
      o3.destroy();
      o2.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o5)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o2.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o6)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o2.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o7)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o2.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o8)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o2.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o9)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o2.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o10)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o2.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o11)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o2.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o12)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o2.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o13)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o2.destroy();
      }  
      }
      //o2
      if(mousePressedOver(o2)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      
      if(mousePressedOver(o1)){
      
      o2.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o3)){
      
      o1.destroy();
      o2.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o4)){
      
      o1.destroy();
      o3.destroy();
      o2.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o5)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o2.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o6)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o2.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o7)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o2.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o8)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o2.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o9)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o2.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o10)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o2.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o11)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o2.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o12)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o2.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o13)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o2.destroy();
      }  
      }
      //o3
      if(mousePressedOver(o3)){
      
      o1.destroy();
      o2.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      
      if(mousePressedOver(o1)){
      
      o2.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o2)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o4)){
      
      o1.destroy();
      o3.destroy();
      o2.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o5)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o2.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o6)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o2.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o7)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o2.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o8)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o2.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o9)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o2.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o10)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o2.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o11)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o2.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o12)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o2.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o13)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o2.destroy();
      }  
      }
      //o4
      if(mousePressedOver(o4)){
      
      o1.destroy();
      o3.destroy();
      o2.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      
      if(mousePressedOver(o1)){
      
      o2.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o3)){
      
      o1.destroy();
      o2.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o2)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o5)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o2.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o6)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o2.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o7)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o2.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o8)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o2.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o9)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o2.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o10)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o2.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o11)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o2.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o12)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o2.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o13)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o2.destroy();
      }  
      }
      //o5
      if(mousePressedOver(o5)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o2.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      
      if(mousePressedOver(o1)){
      
      o2.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o3)){
      
      o1.destroy();
      o2.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o4)){
      
      o1.destroy();
      o3.destroy();
      o2.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o2)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o6)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o2.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o7)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o2.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o8)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o2.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o9)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o2.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o10)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o2.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o11)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o2.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o12)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o2.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o13)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o2.destroy();
      }  
      }
      //o6
      if(mousePressedOver(o6)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o2.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      
      if(mousePressedOver(o1)){
      
      o2.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o3)){
      
      o1.destroy();
      o2.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o4)){
      
      o1.destroy();
      o3.destroy();
      o2.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o5)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o2.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o2)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o7)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o2.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o8)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o2.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o9)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o2.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o10)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o2.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o11)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o2.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o12)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o2.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o13)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o2.destroy();
      }  
      }
      //o7
      if(mousePressedOver(o7)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o2.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      
      if(mousePressedOver(o1)){
      
      o2.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o3)){
      
      o1.destroy();
      o2.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o4)){
      
      o1.destroy();
      o3.destroy();
      o2.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o5)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o2.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o6)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o2.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o2)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o8)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o2.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o9)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o2.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o10)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o2.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o11)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o2.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o12)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o2.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o13)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o2.destroy();
      }  
      }
      //o8
      if(mousePressedOver(o8)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      
      if(mousePressedOver(o1)){
      
      o2.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o3)){
      
      o1.destroy();
      o2.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o4)){
      
      o1.destroy();
      o3.destroy();
      o2.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o5)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o2.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o6)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o2.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o7)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o2.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o2)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o9)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o2.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o10)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o2.destroy();
      o11.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o11)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o2.destroy();
      o12.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o12)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o2.destroy();
      o13.destroy();
      }
      if(mousePressedOver(o13)){
      
      o1.destroy();
      o3.destroy();
      o4.destroy();
      o5.destroy();
      o6.destroy();
      o7.destroy();
      o8.destroy();
      o9.destroy();
      o10.destroy();
      o11.destroy();
      o12.destroy();
      o2.destroy();
      }  
      }
      }
      if(gameState===START){
      this.button();
      this.input();
      p1.hide();
      p2.hide();
      p3.hide();
      p4.hide();
      p5.hide();
      p6.hide();
      p7.hide();
      p8.hide();
      o1.hide();
      o2.hide();
      o3.hide();
      o4.hide();
      o5.hide();
      o6.hide();
      o7.hide();
      o8.hide();
      o9.hide();
      o10.hide();
      o11.hide();
      o12.hide();
      o13.hide();
      }
      if(gameState===END){
      p1.hide();
      p2.hide();
      p3.hide();
      p4.hide();
      p5.hide();
      p6.hide();
      p7.hide();
      p8.hide();
      o1.hide();
      o2.hide();
      o3.hide();
      o4.hide();
      o5.hide();
      o6.hide();
      o7.hide();
      o8.hide();
      o9.hide();
      o10.hide();
      o11.hide();
      o12.hide();
      o13.hide();
      }
      form.hide();
     
      Player.getPlayerInfo();
      player.GetCarsAtEnd();
     
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
        image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
       
        var index = 0;
  
        
        var x = 175 ;
        var y;
       
        for(var plr in allPlayers){
          
          index = index + 1 ;
  
          
          x = x + 200;
    
          y = displayHeight - allPlayers[plr].distance;
          cars[index-1].x = x;
          cars[index-1].y = y;
        
          if (index === player.index){
            stroke(10);
            fill("red");
            ellipse(x,y,60,60);
            cars[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y;
          }
         
          
        }
  
      }
      
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
      
      if(player.distance > 3860){
        gameState = 2;
        player.rank+=1;
        Player.updateCarsAtEnd(player.rank);
      }
     
      drawSprites();
    }
   
    end(){
      console.log("Game Ended");
      console.log(player.rank);
    }
  }
  
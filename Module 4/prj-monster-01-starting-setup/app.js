const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: null,
      battleLog: [],
    };
  },
  methods: {
    attackMonster() {
      const damageValue = getRandomValue(5, 12);
      this.monsterHealth -= damageValue;
      this.addLogMessage('player', 'attack', damageValue)
      this.attackPlayer();
    },
    attackPlayer() {
      const damageValue = getRandomValue(8, 15);
      this.playerHealth -= damageValue;
      this.currentRound++;
      this.addLogMessage('monster', 'attack', damageValue)

    },
    specialAttackMonster() {
      const damageValue = getRandomValue(10, 25);
      this.monsterHealth -= damageValue;
      this.addLogMessage('player', 'special attack', damageValue)
      this.attackPlayer();
    },
    healPlayer() {
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMessage('player', 'heal', damageValue)
      this.currentRound++;
      this.attackPlayer();
    },
    restartGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.battleLog = [];
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(who, what, value) {
     this.battleLog.unshift({
          actionBy: who,
          actionType: what,
          actionValue: value
     })
    }
  },
  computed: {
    monsterHealthStyle() {
      return { width: this.monsterHealth + "%" };
    },
    playerHealthStyle() {
      return { width: this.playerHealth + "%" };
    },
    isSpecialAttackReady() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
});
app.mount("#game");

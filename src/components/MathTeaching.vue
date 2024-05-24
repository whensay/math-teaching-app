<template>
  <div>
    <AppNavbar />
    <div class="container">
      <h2 class="title">Math Teaching</h2>
      <div class="form-group">
        <label for="category">Category:</label>
        <select v-model="category" id="category" class="form-control">
          <option value="addition">Addition</option>
          <option value="subtraction">Subtraction</option>
          <option value="multiplication">Multiplication</option>
          <option value="division">Division</option>
          <option value="mixed">Mixed Operations</option>
        </select>
      </div>
      <div class="form-group">
        <label for="type">Type:</label>
        <select v-model="type" id="type" class="form-control">
          <option value="natural">Natural Numbers</option>
          <option value="negative">Negative Numbers</option>
        </select>
      </div>
      <div class="form-group">
        <label for="difficulty">Difficulty:</label>
        <select v-model="difficulty" id="difficulty" class="form-control">
          <option value="easy">Easy (Single Digit)</option>
          <option value="medium">Medium (Two Digits)</option>
          <option value="hard">Hard (Three Digits)</option>
        </select>
      </div>
      <button @click="generateProblems" class="btn btn-primary btn-block">Generate Problems</button>
      <div v-if="problems.length">
        <h3>Problems</h3>
        <ul class="list-group">
          <li v-for="(problem, index) in problems" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
            {{ problem.question }}
            <input type="text" v-model="problem.userAnswer" class="form-control" />
            <span v-if="problem.checked">{{ problem.isCorrect ? '✔️' : '❌ (' + problem.correctAnswer + ')' }}</span>
          </li>
        </ul>
        <button @click="submitAnswers" class="btn btn-success btn-block mt-3">Submit Answers</button>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from './AppNavbar.vue';

export default {
  components: {
    AppNavbar
  },
  data() {
    return {
      category: 'addition',
      type: 'natural',
      difficulty: 'easy',
      problems: []
    }
  },
  methods: {
    generateProblems() {
      const problemCount = 10;
      const maxNumber = this.getMaxNumber();
      const operations = this.getOperations();

      this.problems = [];

      for (let i = 0; i < problemCount; i++) {
        const num1 = this.getRandomNumber(maxNumber);
        const num2 = this.getRandomNumber(maxNumber);
        const operation = operations[Math.floor(Math.random() * operations.length)];
        const question = `${num1} ${operation} ${num2} = ?`;
        const correctAnswer = this.calculateAnswer(num1, num2, operation);
        this.problems.push({ question, userAnswer: '', correctAnswer, checked: false, isCorrect: false });
      }
    },
    getMaxNumber() {
      switch (this.difficulty) {
        case 'easy':
          return 9;
        case 'medium':
          return 99;
        case 'hard':
          return 999;
        default:
          return 9;
      }
    },
    getRandomNumber(max) {
      const num = Math.floor(Math.random() * (max + 1));
      return this.type === 'negative' ? num * (Math.random() < 0.5 ? 1 : -1) : num;
    },
    getOperations() {
      switch (this.category) {
        case 'addition':
          return ['+'];
        case 'subtraction':
          return ['-'];
        case 'multiplication':
          return ['*'];
        case 'division':
          return ['/'];
        case 'mixed':
          return ['+', '-', '*', '/'];
        default:
          return ['+'];
      }
    },
    calculateAnswer(num1, num2, operation) {
      switch (operation) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          return num2 !== 0 ? (num1 / num2).toFixed(2) : 'undefined';
        default:
          return 'undefined';
      }
    },
    submitAnswers() {
      this.problems.forEach(problem => {
        problem.isCorrect = problem.userAnswer === problem.correctAnswer.toString();
        problem.checked = true;
      });
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2.title {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.btn-block {
  width: 100%;
  margin-top: 20px;
}

.list-group {
  margin-top: 20px;
}

.list-group-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

input.form-control {
  width: auto;
  margin-left: 10px;
}
</style>

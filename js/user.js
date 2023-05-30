// Definición de la clase VisitCounter
class VisitCounter {
    constructor() {
      this.visits = 0;
    }

    increment() {
      this.visits++;
    }

    redirectToSurvey() {
      if (this.visits >= 1001) {
        window.location.href = 'encuesta.html';
      }
    }

    getvisits(){
        return this.visits;
    }
  }
  export default VisitCounter;
  
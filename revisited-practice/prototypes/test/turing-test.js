const chai = require("chai");
const expect = chai.expect;

const { turing } = require('../datasets/turing');
const turingPrompts = require('../codeFiles/turing-code');

describe("Turing Prompts", () => {
  it("should return a list of instructors with the number of students in their module", () => {
    const e = turingPrompts.studentsForEachInstructor();

    expect(e).to.deep.equal([{
      name: "Pam",
      studentCount: 21
    }, {
      name: "Brittany",
      studentCount: 21
    }, {
      name: "Nathaniel",
      studentCount: 21
    }, {
      name: "Robbie",
      studentCount: 18
    }, {
      name: "Leta",
      studentCount: 18
    }, {
      name: "Travis",
      studentCount: 30
    }, {
      name: "Louisa",
      studentCount: 30
    }, {
      name: "Christie",
      studentCount: 20
    }, {
      name: "Will",
      studentCount: 20
    }]);
  });

  it("should return a list of cohorts with the number of students per instructor for that cohort", () => {
    const e = turingPrompts.studentsPerInstructor();

    expect(e).to.deep.equal({
      cohort1806: 15,
      cohort1804: 7,
      cohort1803: 10,
      cohort1801: 9
    });
  });

  it("should return a list of instructors with the modules they can teach based on curriculum", () => {
    const e = turingPrompts.modulesPerTeacher();

    expect(e).to.deep.equal({
      Pam: [2, 4],
      Brittany: [2, 4],
      Nathaniel: [2, 4],
      Robbie: [4],
      Leta: [2, 4],
      Travis: [1, 2, 3, 4],
      Louisa: [1, 2, 3, 4],
      Christie: [1, 2, 3, 4],
      Will: [1, 2, 3, 4]
    });
  });

  it("should return a list of unique curriculum topics with instructors who teach that topic", () => {
    const e = turingPrompts.curriculumPerTeacher();

    expect(e).to.deep.equal({
      html: ["Travis", "Louisa"],
      css: ["Travis", "Louisa"],
      javascript: ["Travis", "Louisa", "Christie", "Will"],
      recursion: ["Pam", "Leta"],
      scope: ["Pam", "Nathaniel", "Will"],
      oop: ["Brittany", "Nathaniel", "Will"],
      react: ["Christie", "Will"],
      redux: ["Will"],
      pwas: ["Brittany", "Robbie", "Leta", "Louisa"],
      mobile: ["Nathaniel"],
      node: ["Pam", "Robbie", "Leta", "Louisa", "Christie"]
    });
  });
});

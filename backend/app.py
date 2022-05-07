from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///ruhacks.db'

db = SQLAlchemy(app)

class Instructor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    courses = db.relationship('Course', backref='instructor', lazy=True)

class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    phone = db.Column(db.Integer)
    points = db.Column(db.Integer)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'), nullable=False)
    quizResults = db.relationship('QuizResult', backref='student', lazy=True)

class QuizResult(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    score = db.Column(db.Float)
    student_id = db.Column(db.Integer, db.ForeignKey("student.id"), nullable=False)
    quiz_id = db.Column(db.Integer, db.ForeignKey('quiz.id'))

class Quiz(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    quizResult = db.relationship('QuizResult', backref='quiz', uselist=False)
    questions = db.relationship('Question', backref='quiz')
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'))

class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String)
    quiz_id = db.Column(db.Integer, db.ForeignKey('quiz.id'))
    choices = db.relationship('QuestionChoice', backref='question')
    answer_choice = db.relationship('QuestionChoice', backref='answer', uselist=False)

class QuestionChoice(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(5))
    text = db.Column(db.String(200))
    question_id = db.Column(db.Integer, db.ForeignKey('question.id'))

class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String)
    instructor_id = db.Column(db.Integer, db.ForeignKey("instructor.id"), nullable=False)
    students = db.relationship('Student', backref='course', lazy=True)
    quizzes = db.relationship('Quiz', backref='course')


db.create_all()

# steve = Instructor(name='Steve')
# db.session.add(steve)
# db.session.commit()
# print(Instructor.query.all())

# nancy = Instructor(name='Nancy')
# db.session.add(nancy)
# db.session.commit()
# print(Instructor.query.count())

# steve = Instructor.query.filter_by(name='Steven').first()
# steve.name = 'Steven Grant'
# db.session.commit()

# print(Instructor.query.filter_by(name='Nancy').count())


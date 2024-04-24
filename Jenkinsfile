pipeline {
    agent {
        docker { image 'mcr.microsoft.com/playwright:v1.21.0-focal' }
    }
    stages {
        stage('e2e-tests') {
            steps {
                script {
                    bat 'npm install'
                    bat 'npm run test'
                }
            }
        }
    }
}
# Stage 1: Build using JDK 21 (Change line 1 in your Dockerfile)
FROM maven:3.9-eclipse-temurin-21-alpine AS build
WORKDIR /app

# Copy dependency definition and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy source code and build package
COPY src ./src
RUN mvn package -DskipTests

# Stage 2: Runtime image using JRE 21
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Copy built JAR from stage 1
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]

default: run

run: develop

develop:
	docker-compose -f docker-compose-dev.yml up --build

dev-down:
	docker-compose -f docker-compose-dev.yml down

publish:
	docker-compose -f docker-compose-prod.yml \
  run raices &&\
  docker-compose -f docker-compose-prod.yml \
  run aws

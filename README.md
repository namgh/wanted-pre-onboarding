nodejs 프레임워크인 nestjs와 restapi로 서버를 구현하였습니다.
database 는 mysql 를 사용하였고, orm은 typeorm을 사용하였습니다.

# 요구사항 분석

### 1.채용공고를 등록합니다.

채용공고entity jobPosting 를 생성 및 회사entity company 을 먼저 만들었습니다.
module,controller,service를 생성후 기본 typeorm save 옵션으로 공고를 등록하였습니다. 공고와 회사는 manytoone 으로 연결하였습니다.

### 2.채용공고를 수정합니다.

rest api put 을 사용하였습니다.
파라미터로 id값을 받고,
typeorm save 옵션을 사용하여 update를 하도록 구현하였습니다.

### 3.채용공고를 삭제합니다.

파라미터로 id값을 받고,
typeorm delete 옵션을 사용하여 삭제되도록 구현하였습니다.

### 4.채용공고 목록을 가져옵니다.

1. typeorm find옵션을 사용하여 모든 정보를 가져왔습니다
   결과값을 만들기 위해서 가공을 하여서 반환하였습니다.

2. querybuilder를 사용하였고, like 옵션을 사용하여 검색을 구현하였습니다.
   회사이름, 지역, 나라, 포지션, 기술중에 검색어가 포함되어있으면 반환하도록 구현하였습니다.

### 5.채용 상세 페이지를 가져옵니다.

querybuilder 를 사용하였고, leftjoinandselect옵션으로 다른 테이블을 조인한 후 결과값과 같도록 반환하였습니다.

### 6.사용자는 채용공고에 지원합니다.

jobposthistory entity 를 생성하여 user 테이블과 manytoone, jobposting 테이블과 manytoone으로 연결하였습니다.
user id값과 jobPosting id값을 입력받은후 jobposthistory를 생성합니다.
지원한 적이 있는지 먼저 확인을 하도록 하였고, 없으면 jobposthistory에 등록하여 기록이 남도록 구현하였습니다.

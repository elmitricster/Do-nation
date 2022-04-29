import * as S from './Style';

export function SubjectButton({ cate, btnActiveHandler, cateActive, setCateActive }) {
  return(
    <div className='col-4'>
      <S.CategoryButton
        id={cate.id}
        onClick={() => btnActiveHandler(cate.id, cateActive, setCateActive)}
        props={cateActive}
      >
        {cate.cate}
      </S.CategoryButton>
    </div>
  )
}
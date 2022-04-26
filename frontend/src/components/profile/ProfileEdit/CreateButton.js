import * as S from './Style';

export function CreateButton({ cate, btnActiveHandler, cateActive, setCateActive }) {
  return(
    <div className='col-3'>
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
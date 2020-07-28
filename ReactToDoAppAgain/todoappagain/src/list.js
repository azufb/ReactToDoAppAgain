import React from 'react';

function List(props) {
    let items = props.items;
    let list = items.map(item => {
        return <div>
            <p>
                {/* 出力エリアのタスクに編集機能を持たせるため、inputを入れる。 */}
                <input type="text" value={item.text} onChange={(event) => {
                    props.setUpdate(event.target.value, item.key)}} />
            </p>
        </div>})
    return <div>
        {list}
    </div>
}

export default List;
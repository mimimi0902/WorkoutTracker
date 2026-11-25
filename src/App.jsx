
import { useState } from 'react'

function App() {
  const [exercise, setExercise] = useState('')

  return (
    <main>
      <h1>筋トレ記録アプリ</h1>

      <h2>トレーニング種目</h2>

      <select
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
      >
        <option value="">種目を選択してください</option>
        <option value="ベンチプレス">ベンチプレス</option>
        <option value="スクワット">スクワット</option>
        <option value="デッドリフト">デッドリフト</option>
        <option value="ダンベルプレス">ダンベルプレス</option>
        <option value="ラットプルダウン">ラットプルダウン</option>
        <option value="ショルダープレス">ショルダープレス</option>
      </select>

      <p>選択した種目：{exercise}</p>
    </main>
  )
}

export default App

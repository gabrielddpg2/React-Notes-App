import LinearProgress from '@material-ui/core/LinearProgress'
import { useStyles } from 'styles/ProgressionIndicatorStyle'
import { useSelector } from 'react-redux'

export default function ProgressionIndicator() {
  const classes = useStyles()
  const notes = useSelector((state) => state.notes.all)
  const notesCount = notes.length
  const completedNotesCount = notes.filter((note) => note.completed).length
  const currentProgress = (100 / notesCount) * completedNotesCount
  const infoText =
    notesCount === completedNotesCount
      ? 'Você não realizou sua primeira nota'
      : `Você tem ${completedNotesCount}/${notesCount} notas completas`

  return (
    <div
      className={classes.root}
      style={{ display: notesCount ? 'block' : 'none' }}
    >
      <div className={classes.infoText}>{infoText}</div>
      <LinearProgress variant="determinate" value={currentProgress} />
    </div>
  )
}
